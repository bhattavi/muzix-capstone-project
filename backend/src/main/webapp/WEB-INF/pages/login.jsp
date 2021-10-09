<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
welcome to login
<form:errors></form:errors>
<form:form modelAttribute="userlogin" method="post">
Username:<form:input path="uname"/>

<br>
password: <form:password path="password"/>
<br>

<button>Login</button>
</form:form>
</body>
</html>