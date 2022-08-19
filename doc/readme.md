# Documentation

### Access Token Generation
SDK `Connect` method to connect with Sanar services.

```javascript
SanarTelemedicine.Connect("your_client_id", "user_info"})
    .then(response => {
        setConnect(response);
    }).catch(e => console.log(e));
```


### SanarTelemedicine : 
Component to connect with Sanar Server

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
Connect | callback | yes | - | Accepts client_id & user details and generate user info to utilise Sanar telemedicine features


#### Connect()
Connect method properties are listed below 
Parameters

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
cid | string | yes | - | Client Id provided by Sanar
info | [UserInfo](https://github.com/PracticePixel/sanar-telemedicine-sdk/tree/master/doc#userinfo-) | yes | - | User properties to create session with Sanar
lang | string | no | `en` | Language of the application

### SanarRTC : 
Sanar videocall frames to initiate videocall

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
enable | boolean | true | - | Enable / Disable RTC connection

### SanarBooking :
Telemedicine appointment booking flow
Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
enable | boolean | false | - | To enable / disable telemedicine booking flow
onEndFlow | callback | true | - | To handle enable property on booking finish


### SanarAppointments :
Telemedicine appointment list flow
Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
enable | boolean | false | - | To enable / disable telemedicine booking flow
onEndFlow | callback | true | - | To handle enable property on booking finish


### UserInfo :
Property | Description
:--- | :---
uid : string  | 
did : string  | 
first_name : string | 
last_name : string  | 
dob : string  | 
gender : string  | 
nationality : string | 
document_id : string | 
mid : string | 
document_type: number | 
phone_code : string  | 
phone_no : string | 
marital_status : string | 


