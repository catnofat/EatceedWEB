import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy 설정
    proxy: {
      // 경로가 "/api" 로 시작하는 요청을 대상으로 proxy 설정
      '/v1': {
        // 요청 전달 대상 서버 주소 설정
        target: 'https://eatceed.net/',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
