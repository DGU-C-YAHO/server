<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>로딩 페이지</title>
  <script class="jsbin" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <script src="upload.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css">
  <style type="text/css">
    hr{
      border-top: 3px dashed #bbbb;
    }
  </style>
</head>
<body>
  <%
   request.setCharacterEncoding("UTF-8");
   String name = request.getParameter("labelName");
%>
  <h2><b>Service Name</b></h2>
  <hr>
  <center>
    <div class = "loadingbox" style="height: 300px;">
        <div class="loader"></div>
        <% String[] namevalue = request.getParameterValues("labelName");
        for(int i=0; i<namevalue.length; i++)
        { out.print(namevalue[i])}
        %>
        <h3>작업이 진행중입니다.</h3>
        <h3>예상 소요 시간: XX분 XX초</h3>
    </div>
    </form>
</center>
</body>
</html>