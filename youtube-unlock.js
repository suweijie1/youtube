// youtube-unlock.js
let body = $response.body;

body = body.replace('"is_eligible_for_membership":false', '"is_eligible_for_membership":true');

$done({ body });
