// api/broken.js
export default {
  async fetch(request) {
    // 缺少闭合括号 - 语法错误
    return Response.json({ message: 'This will fail' );
  },
};