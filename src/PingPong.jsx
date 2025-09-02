import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Snake.css';

const Snake = () => {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  const logoRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Load the logo image
    const logoImg = new Image();
    logoImg.src = '/mainlogo.png';
    logoRef.current = logoImg;

    const gridSize = 20;
    const tileCount = canvas.width / gridSize;

    // Game state
    const gameState = {
      snake: [
        { x: 10, y: 10 }
      ],
      food: {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      },
      dx: 0,
      dy: 0,
      keys: {}
    };

    gameRef.current = gameState;

    // Handle keyboard input
    const handleKeyDown = (e) => {
      gameState.keys[e.key] = true;
      
      // Prevent snake from reversing into itself
      if (e.key === 'ArrowUp' && gameState.dy === 0) {
        gameState.dx = 0;
        gameState.dy = -1;
      }
      if (e.key === 'ArrowDown' && gameState.dy === 0) {
        gameState.dx = 0;
        gameState.dy = 1;
      }
      if (e.key === 'ArrowLeft' && gameState.dx === 0) {
        gameState.dx = -1;
        gameState.dy = 0;
      }
      if (e.key === 'ArrowRight' && gameState.dx === 0) {
        gameState.dx = 1;
        gameState.dy = 0;
      }
    };

    const handleKeyUp = (e) => {
      gameState.keys[e.key] = false;
    };

    // Game loop
    const gameLoop = () => {
      if (!gameStarted) return;

      // Clear canvas
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Only move if there's a direction set
      if (gameState.dx !== 0 || gameState.dy !== 0) {
        // Move snake
        const head = { x: gameState.snake[0].x + gameState.dx, y: gameState.snake[0].y + gameState.dy };

        // Check wall collision
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
          setGameStarted(false);
          return;
        }

        // Check self collision
        for (let segment of gameState.snake) {
          if (head.x === segment.x && head.y === segment.y) {
            setGameStarted(false);
            return;
          }
        }

        gameState.snake.unshift(head);

        // Check food collision
        if (head.x === gameState.food.x && head.y === gameState.food.y) {
          setScore(prev => {
            const newScore = prev + 10;
            if (newScore > highScore) {
              setHighScore(newScore);
            }
            return newScore;
          });
          
          // Generate new food position
          let newFoodX, newFoodY;
          do {
            newFoodX = Math.floor(Math.random() * tileCount);
            newFoodY = Math.floor(Math.random() * tileCount);
          } while (gameState.snake.some(segment => segment.x === newFoodX && segment.y === newFoodY));
          
          gameState.food = { x: newFoodX, y: newFoodY };
        } else {
          // Remove tail if no food eaten
          gameState.snake.pop();
        }
      }

      // Draw snake
      for (let i = 0; i < gameState.snake.length; i++) {
        const segment = gameState.snake[i];
        if (i === 0) {
          // Head - slightly different color
          ctx.fillStyle = '#ccc';
        } else {
          ctx.fillStyle = '#fff';
        }
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
      }

      // Draw food (using mainlogo)
      if (logoRef.current && logoRef.current.complete) {
        ctx.drawImage(
          logoRef.current,
          gameState.food.x * gridSize,
          gameState.food.y * gridSize,
          gridSize,
          gridSize
        );
      } else {
        // Fallback to red square if logo not loaded
        ctx.fillStyle = '#f00';
        ctx.fillRect(gameState.food.x * gridSize, gameState.food.y * gridSize, gridSize - 2, gridSize - 2);
      }

      setTimeout(() => {
        if (gameStarted) {
          requestAnimationFrame(gameLoop);
        }
      }, 150); // Control game speed
    };

    const resetBall = () => {
      gameState.snake = [{ x: 10, y: 10 }];
      gameState.dx = 0;
      gameState.dy = 0;
      gameState.food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
    };

    // Initial draw
    const drawInitialState = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw initial snake
      ctx.fillStyle = '#ccc';
      ctx.fillRect(gameState.snake[0].x * gridSize, gameState.snake[0].y * gridSize, gridSize - 2, gridSize - 2);
      
      // Draw initial food
      if (logoRef.current && logoRef.current.complete) {
        ctx.drawImage(
          logoRef.current,
          gameState.food.x * gridSize,
          gameState.food.y * gridSize,
          gridSize,
          gridSize
        );
      } else {
        ctx.fillStyle = '#f00';
        ctx.fillRect(gameState.food.x * gridSize, gameState.food.y * gridSize, gridSize - 2, gridSize - 2);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Draw initial state
    drawInitialState();

    if (gameStarted) {
      gameLoop();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStarted, score, highScore]);

  // Handle game over
  useEffect(() => {
    if (!gameStarted && score > 0) {
      setTimeout(() => {
        alert(`Game Over! Score: ${score}\nHigh Score: ${Math.max(score, highScore)}`);
      }, 500);
    }
  }, [gameStarted, score, highScore]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    // Reset game state immediately
    if (gameRef.current && canvasRef.current) {
      const tileCount = canvasRef.current.width / 20;
      gameRef.current.snake = [{ x: 10, y: 10 }];
      gameRef.current.dx = 1; // Start moving right
      gameRef.current.dy = 0;
      gameRef.current.food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
    }
  };

  const stopGame = () => {
    setGameStarted(false);
  };

  const resetGame = () => {
    setGameStarted(false);
    setScore(0);
    if (gameRef.current && canvasRef.current) {
      const tileCount = canvasRef.current.width / 20;
      gameRef.current.snake = [{ x: 10, y: 10 }];
      gameRef.current.dx = 0;
      gameRef.current.dy = 0;
      gameRef.current.food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
    }
  };

  return (
    <div className="pingpong-container">
      <div className="pingpong-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1 className="pingpong-title">🐍 SNAKE EASTER EGG 🐍</h1>
      </div>
      
      <div className="game-area">
        <div className="scoreboard">
          <div className="score-item">
            <span className="score-label">SCORE</span>
            <span className="score-value">{score}</span>
          </div>
          <div className="score-item">
            <span className="score-label">HIGH SCORE</span>
            <span className="score-value">{highScore}</span>
          </div>
          <div className="score-item">
            <span className="score-label">LENGTH</span>
            <span className="score-value">{gameRef.current?.snake?.length || 1}</span>
          </div>
        </div>
        
        <canvas
          ref={canvasRef}
          width={600}
          height={600}
          className="game-canvas"
        />
        
        <div className="game-controls">
          {!gameStarted ? (
            <button onClick={startGame} className="game-btn start-btn">
              START GAME
            </button>
          ) : (
            <button onClick={stopGame} className="game-btn stop-btn">
              PAUSE GAME
            </button>
          )}
          <button onClick={resetGame} className="game-btn reset-btn">
            RESET
          </button>
        </div>
        
        <div className="game-instructions">
          <h3>How to Play:</h3>
          <p>Use <strong>↑</strong> <strong>↓</strong> <strong>←</strong> <strong>→</strong> arrow keys to move the snake</p>
          <p>Eat the logos to grow longer and increase your score! 🎮</p>
          <p>Don't hit the walls or yourself!</p>
        </div>
      </div>
    </div>
  );
};

export default Snake;
