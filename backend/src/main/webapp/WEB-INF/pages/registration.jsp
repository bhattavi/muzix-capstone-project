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
<h1>Welcome to registration</h1>

<form:form modelAttribute="register" mehtod="post">
Username:<form:input  path="name"/>
<br>
email: <form:input  path="email"/>
<br>
city: <form:input  path="city"/>
<br>
password: <form:password  path="password"/>
<br>
department: <form:input  path="department"/>
<br>
<button>Register</button>
</form:form>
</body>
</html>