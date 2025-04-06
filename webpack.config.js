const path = require('path');

// 환경 변수에 따라 모드 설정 (기본값은 'production')
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = [
  // Main process
  {
    mode: mode,
    entry: './src/main/index.ts',
    target: 'electron-main',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    }
  },
  // Renderer process
  {
    mode: mode,
    entry: './src/renderer/index.tsx',
    target: 'electron-renderer',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'renderer.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    }
  }
];
