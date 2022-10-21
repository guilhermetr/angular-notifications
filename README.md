# NotificationsTests

App to request the user permission to show notifications

## Development server
**Generate dist files:**  
ng build  
  
**Run http server:** (doesn’t work with ng serve)  
http-server -p 8080 -c-1 dist/notifications-tests

## Popup blocked
If the user blocks the request or closes it a few times it won’t be shown again unless we remove it from the browser’s blocked notifications list. For example, in Chrome: go to  “chrome://settings/content/notifications”.