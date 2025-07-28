if (!$response || !$response.body) {
  console.log("❌ 空响应或无 body，跳过脚本");
  $done({});
} else {
  console.log("🎯 youtube-unlock.js 命中");
  let body = $response.body;
  body = body.replace(/"is_eligible_for_membership":false/g, '"is_eligible_for_membership":true');
  $done({ body });
}

