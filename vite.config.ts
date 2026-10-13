import { defineConfig } from 'vite';
export default defineConfig({base:'./',server:{port:53427,strictPort:true,watch:{ignored:['**/references/**','**/.venv/**','**/docs/**']}}});
