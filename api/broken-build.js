// api/broken-build.js
import { nonExistentFunction } from './helper.js';  // 这个文件不存在

export default {
  fetch(request) {
    return Response.json({ message: 'This will fail' });
  },
};