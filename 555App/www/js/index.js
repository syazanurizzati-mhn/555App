$(function () {
    if (!sessionStorage.ttoken || sessionStorage.ttoken === null)
        location.href = "home.html";

    //$("#idSpan").val = sessionStorage.ttoken;
    document.getElementById("idSpan").innerHTML = sessionStorage.ttoken;

    var link1 = crossroads.addRoute("/logout", function () {
        sessionStorage.clear();
        location.href = "home.html";
    });

    var link2 = crossroads.addRoute("", function () {
        $("#divHome").show();
        $("#divApp").show();
        $("#divSong").show();
        $("#divNotes").hide();
        $("#divAddNotes").hide();
        $("#divEditNotes").hide();
        $("#divStudies").hide();
        $("#divAddStudies").hide();
        $("#divEditStudies").hide();
        $("#divExpenses").hide();
        $("#divAddExpenses").hide();
        $("#divEditExpenses").hide();
        $("#divRecipes").hide();
        $("#divAbout").hide();
        $("#divProfile").hide();
    });

    var link24 = crossroads.addRoute("/recipes", function () {
        $(".navbar-collapse li").removeClass("active");
        $(".navbar-collapse li a[href='#recipes']").parent().addClass("active");
        $("#divRecipes").show();
        $("#divAbout").hide();
        $("#divHome").hide();
        $("#divNotes").hide();
        $("#divStudies").hide();
        $("#divExpenses").hide();
        $("#divAddNotes").hide();
        $("#divAddStudies").hide();
        $("#divAddExpenses").hide();
        $("#divEditNotes").hide();
        $("#divEditStudies").hide();
        $("#divEditExpenses").hide();
        $("#divApp").hide();
        $("#divSong").hide();
        $("#divProfile").hide();
    });

    var link24 = crossroads.addRoute("/about", function () {
        $(".navbar-collapse li").removeClass("active");
        $(".navbar-collapse li a[href='#about']").parent().addClass("active");
        $("#divAbout").show();
        $("#divRecipes").hide();
        $("#divHome").hide();
        $("#divNotes").hide();
        $("#divStudies").hide();
        $("#divExpenses").hide();
        $("#divAddNotes").hide();
        $("#divAddStudies").hide();
        $("#divAddExpenses").hide();
        $("#divEditNotes").hide();
        $("#divEditStudies").hide();
        $("#divEditExpenses").hide();
        $("#divApp").hide();
        $("#divSong").hide();
        $("#divProfile").hide();
    });

    var link4 = crossroads.addRoute("/btnAddNotes", function () {
        $("#divHome").hide();
        $("#divNotes").hide();
        $("#divAddNotes").show();
        $("#divEditNotes").hide();
        $("#divStudies").hide();
        $("#divAddStudies").hide();
        $("#divEditStudies").hide();
        $("#divExpenses").hide();
        $("#divAddExpenses").hide();
        $("#divEditExpenses").hide();
        $("#divRecipe").hide();
        $("#divAbout").hide();
        $("#divApp").hide();
        $("#divSong").hide();
        $("#divProfile").hide();
    });

    var link41 = crossroads.addRoute("/btnAddStudies", function () {
        $("#divHome").hide();
        $("#divNotes").hide();
        $("#divAddNotes").hide();
        $("#divEditNotes").hide();
        $("#divStudies").hide();
        $("#divAddStudies").show();
        $("#divEditStudies").hide();
        $("#divExpenses").hide();
        $("#divAddExpenses").hide();
        $("#divEditExpenses").hide();
        $("#divRecipes").hide();
        $("#divAbout").hide();
        $("#divApp").hide();
        $("#divSong").hide();
        $("#divProfile").hide();
    });

    var link42 = crossroads.addRoute("/btnAddExpenses", function () {
        $("#divHome").hide();
        $("#divNotes").hide();
        $("#divAddNotes").hide();
        $("#divEditNotes").hide();
        $("#divStudies").hide();
        $("#divAddStudies").hide();
        $("#divEditStudies").hide();
        $("#divExpenses").hide();
        $("#divAddExpenses").show();
        $("#divEditExpenses").hide();
        $("#divRecipes").hide();
        $("#divAbout").hide();
        $("#divApp").hide();
        $("#divSong").hide();
        $("#divProfile").hide();
    });

     //profile
     var link37 = crossroads.addRoute("/profile", function () {
        $(".navbar-collapse li").removeClass("active");
        $(".navbar-collapse li a[href='#profile']").parent().addClass("active");
        var email = sessionStorage.ttoken;
        var datalist = "email=" + email;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/GetProfileData",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td>" + myData[i].email
                            + "</td><td>" + myData[i].password
                            + "</td></tr>";
                    }

                    $("#tblProfile tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
        $("#divProfile").show();
        $("#divHome").hide();
        $("#divNotes").hide();
        $("#divAddNotes").hide();
        $("#divEditNotes").hide();
        $("#divStudies").hide();
        $("#divAddStudies").hide();
        $("#divEditStudies").hide();
        $("#divExpenses").hide();
        $("#divAddExpenses").hide();
        $("#divEditExpenses").hide();
        $("#divRecipes").hide();
        $("#divAbout").hide();
        $("#divApp").hide();
        $("#divSong").hide();
    });

    //NOTES
    var link3 = crossroads.addRoute("/notes", function () {
        $(".navbar-collapse li").removeClass("active");
        $(".navbar-collapse li a[href='#notes']").parent().addClass("active");
        var email = sessionStorage.ttoken;
        var datalist = "email=" + email;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/GetNotesData",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);

                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td>" + myData[i].id
                            + "</td><td>" + myData[i].nickname
                            + "</a></td><td>" + myData[i].email
                            + "</td><td>" + myData[i].username
                            + "</td><td>" + myData[i].password
                            + "</td><td>" + myData[i].phone
                            + "</td><td>" + myData[i].addedDate
                            + "</td><td><a href='#viewnotes/" + myData[i].id + "'><span class='glyphicon glyphicon-edit' data-processid=0 data-notesid="
                            + myData[i].id
                            + "></span></a></td><td><a href='#delnotes'><span class='glyphicon glyphicon-trash' data-processid=1 data-notesid="
                            + myData[i].id
                            + "></span></a></td></tr>";
                    }

                    $("#tblNotes tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
        $("#divHome").hide();
        $("#divNotes").show();
        $("#divAddNotes").hide();
        $("#divEditNotes").hide();
        $("#divStudies").hide();
        $("#divAddStudies").hide();
        $("#divEditStudies").hide();
        $("#divExpenses").hide();
        $("#divAddExpenses").hide();
        $("#divEditExpenses").hide();
        $("#divRecipes").hide();
        $("#divAbout").hide();
        $("#divApp").hide();
        $("#divSong").hide();
        $("#divProfile").hide();
    });


    $("#frmAddNotes").submit(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var nickname = $("#nickname").val();
        var email = $("#email").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var phone = $("#phone").val();

        var datalist = "nickname=" + nickname + " &email=" + email + "&username=" + username + "&password=" + password + "&phone=" + phone + "&owneremail=" + sessionStorage.ttoken;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/AddNotes",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                if (myData.status === 1) {
                    alert("Add Notes Success!");
                    $("#divNotes").show();
                    $("#divAddNotes").hide();
                    $("#divStudies").hide();
                    $("#divAddStudies").hide();
                    $("#divEditStudies").hide();
                    $("#divExpenses").hide();
                    $("#divAddExpenses").hide();
                    $("#divEditExpenses").hide();
                    $("#divRecipes").hide();
                    $("#divAbout").hide();
                    $("#divApp").hide();
                    $("#divSong").hide();
                    $("#divProfile").hide();
                }
                else {
                    alert("Add Notes Failed");
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
    });

    $("#frmEditNotes").submit(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var nickname = $("#nickname100").val();
        var email = $("#emailadd100").val();
        var username = $("#username100").val();
        var password = $("#pass100").val();
        var phone = $("#phoneno100").val();
        var notesid = $("#notesid").val();

        var datalist = "nickname=" + nickname + " &email=" + email + "&username=" + username + "&password=" + password + "&phone=" + phone + "&notesid=" + notesid;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/UpdateNotesDataById",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                if (myData.status === 1) {
                    alert("Update Notes Success!");
                    $("#divEditNotes").hide();
                    $("#divNotes").show();
                    $("#divStudies").hide();
                    $("#divEditStudies").hide();
                    $("#divExpenses").hide();
                    $("#divEditExpenses").hide();
                    $("#divRecipes").hide();
                    $("#divAbout").hide();
                    $("#divApp").hide();
                    $("#divSong").hide();
                    $("#divProfile").hide();
                }
                else {
                    alert("Update Notes Failed");
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
    });

    $("#tblNotes tbody").on("click", "span", function () {
        var processid = $(this).data("processid");
        var notesid = $(this).data("notesid");
        datalist = "notesid=" + notesid;
        if (processid==1){ 
        var parentTR = $(this).parent().parent().parent();
        bootbox.confirm("Are you sure to delete this notes?", function (answer) {
            if (answer) {
                $.ajax({
                    type: "post",
                    url: "http://172.17.64.91:8080/FrontEnd/DelNotesById",
                    data: datalist,
                    cache: false,
                    success: function (mydata) {
                        var myData = JSON.parse(mydata);
                        if (myData.status === 1) {
                            alert("Delete Notes Successfull!");
                            $(parentTR).fadeOut("slow", "swing", function () {
                                $(parentTR).remove();
                            });
                        }
                        else {
                            alert("Delete Notes Failed");
                        }
                    },
                    error: function () {
                        console.log("ajax error!");
                        alert("Please contact admin!");
                    }
                });
            }
            else {
                bootbox.alert("Delete canceled!");
            }
        });
    }else{
        var link5 = crossroads.addRoute("/viewnotes/{id}", function (id) {

            var datalist = "id=" + id;
            $.ajax({
                type: "post",
                url: "http://172.17.64.91:8080/FrontEnd/GetNotesDataById",
                data: datalist,
                cache: false,
                success: function (mydata) {
                    var myData = JSON.parse(mydata);
    
                    if (myData.status === 1) {
                        document.getElementById("nickname100").value = myData.nickname;
                        document.getElementById("emailadd100").value = myData.email;
                        document.getElementById("username100").value = myData.username;
                        document.getElementById("pass100").value = myData.password;
                        document.getElementById("phoneno100").value = myData.phone;
                        document.getElementById("notesid").value = myData.id;
                    }
                    $("#divHome").hide();
                    $("#divNotes").hide();
                    $("#divAddNotes").hide();
                    $("#divEditNotes").show();
                    $("#divStudies").hide();
                    $("#divAddStudies").hide();
                    $("#divEditStudies").hide();
                    $("#divExpenses").hide();
                    $("#divAddExpenses").hide();
                    $("#divEditExpenses").hide();
                    $("#divRecipes").hide();
                    $("#divAbout").hide();
                    $("#divApp").hide();
                    $("#divSong").hide();
                    $("#divProfile").hide();
                },
                error: function () {
                    console.log("ajax error!");
                    alert("Please contact admin!");
                }
            });
        });
    }
    });

    //STUDIES

    var link31 = crossroads.addRoute("/studies", function () {
        $(".navbar-collapse li").removeClass("active");
        $(".navbar-collapse li a[href='#studies']").parent().addClass("active");
        var email = sessionStorage.ttoken;
        var datalist = "email=" + email;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/GetStudiesData",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);

                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td>" + myData[i].id
                            + "</td><td>" + myData[i].subject
                            + "</td><td>" + myData[i].notes
                            + "</td><td><a href='#viewstudies/" + myData[i].id + "'><span class='glyphicon glyphicon-edit' data-processstudiesid=0 data-studiesid="
                            + myData[i].id 
                            + "></span></a></td><td><a href='#delstudies'><span class='glyphicon glyphicon-trash' data-processstudiesid=1 data-studiesid="
                            + myData[i].id
                            + "></span></a></td></tr>";
                    }

                    $("#tblStudies tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
        $("#divHome").hide();
        $("#divNotes").hide();
        $("#divAddNotes").hide();
        $("#divEditNotes").hide();
        $("#divStudies").show();
        $("#divAddStudies").hide();
        $("#divEditStudies").hide();
        $("#divExpenses").hide();
        $("#divAddExpenses").hide();
        $("#divEditExpenses").hide();
        $("#divRecipes").hide();
        $("#divAbout").hide();
        $("#divApp").hide();
        $("#divSong").hide();
        $("#divProfile").hide();
    });


    $("#frmAddStudies").submit(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var subject = $("#subject").val();
        var notes = $("#notes").val();

        var datalist = "subject=" + subject + " &notes=" + notes + "&owneremail=" + sessionStorage.ttoken;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/AddStudies",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                if (myData.status === 1) {
                    alert("Add Studies Success!");
                    $("#divStudies").show();
                    $("#divAddStudies").hide();
                    $("#divNotes").hide();
                    $("#divAddNotes").hide();
                    $("#divExpenses").hide();
                    $("#divAddExpenses").hide();
                    $("#divRecipes").hide();
                    $("#divAbout").hide();
                    $("#divApp").hide();
                    $("#divSong").hide();
                    $("#divProfile").hide();
                }
                else {
                    alert("Add Studies Failed");
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
    });

    $("#frmEditStudies").submit(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var subject = $("#subject100").val();
        var notes = $("#notes100").val();
        var studiesid = $("#studiesid").val();

        var datalist = "subject=" + subject + " &notes=" + notes + "&studiesid=" + studiesid;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/UpdateStudiesDataById",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                if (myData.status === 1) {
                    alert("Update Studies Success!");
                    $("#divEditStudies").hide();
                    $("#divStudies").show();
                    $("#divEditNotes").hide();
                    $("#divNotes").hide(); 
                    $("#divExpenses").hide();
                    $("#divEditExpenses").hide();
                    $("#divRecipes").hide();
                    $("#divAbout").hide();
                    $("#divApp").hide();
                    $("#divSong").hide();
                    $("#divProfile").hide();
                }
                else {
                    alert("Update Studies Failed");
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
    });

    $("#tblStudies tbody").on("click", "span", function () {
        var processstudiesid = $(this).data("processstudiesid");
        var notesid = $(this).data("notesid");
        datalist = "studiesid=" + studiesid;
        if (processstudiesid==1){ 
        var parentTR = $(this).parent().parent().parent();
        bootbox.confirm("Are you sure want to delete this link?", function (answer) {
            if (answer) {
                $.ajax({
                    type: "post",
                    url: "http://172.17.64.91:8080/FrontEnd/DelStudiesById",
                    data: datalist,
                    cache: false,
                    success: function (mydata) {
                        var myData = JSON.parse(mydata);
                        if (myData.status === 1) {
                            alert("Delete Studies Successfull!");
                            $(parentTR).fadeOut("slow", "swing", function () {
                                $(parentTR).remove();
                            });
                        }
                        else {
                            alert("Delete Studies Failed");
                        }
                    },
                    error: function () {
                        console.log("ajax error!");
                        alert("Please contact admin!");
                    }
                });
            }
            else {
                bootbox.alert("Delete canceled!");
            }
        });
    }else{
        var link51 = crossroads.addRoute("/viewstudies/{id}", function (id) {

            var datalist = "id=" + id;
            $.ajax({
                type: "post",
                url: "http://172.17.64.91:8080/FrontEnd/GetStudiesDataById",
                data: datalist,
                cache: false,
                success: function (mydata) {
                    var myData = JSON.parse(mydata);
    
                    if (myData.status === 1) {
                        document.getElementById("subject100").value = myData.subject;
                        document.getElementById("notes100").value = myData.notes;
                        document.getElementById("studiesid").value = myData.id;
                    }
                    $("#divHome").hide();
                    $("#divNotes").hide();
                    $("#divAddNotes").hide();
                    $("#divEditNotes").hide();
                    $("#divStudies").hide();
                    $("#divAddStudies").hide();
                    $("#divEditStudies").show();
                    $("#divExpenses").hide();
                    $("#divAddExpenses").hide();
                    $("#divEditExpenses").hide();
                    $("#divRecipes").hide();
                    $("#divAbout").hide();
                    $("#divApp").hide();
                    $("#divSong").hide();
                    $("#divProfile").hide();
                },
                error: function () {
                    console.log("ajax error!");
                    alert("Please contact admin!");
                }
            });
        });
    }
    });

    //Expenses

    var link32 = crossroads.addRoute("/expenses", function () {
        $(".navbar-collapse li").removeClass("active");
        $(".navbar-collapse li a[href='#expenses']").parent().addClass("active");
        var email = sessionStorage.ttoken;
        var datalist = "email=" + email;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/GetExpensesData",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);

                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td>" + myData[i].id
                            + "</td><td>" + myData[i].date
                            + "</td><td>" + myData[i].itemsprice
                            + "</td><td>" + myData[i].total
                            + "</td><td><a href='#viewexpenses/" + myData[i].id + "'><span class='glyphicon glyphicon-edit' data-processexpensesid=0 data-expensesid="
                            + myData[i].id
                            + "></span></a></td><td><a href='#delexpenses'><span class='glyphicon glyphicon-trash' data-processexpensesid=1 data-expensesid="
                            + myData[i].id
                            + "></span></a></td></tr>";
                    }

                    $("#tblExpenses tbody").html(htmlText);
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
        $("#divHome").hide();
        $("#divNotes").hide();
        $("#divAddNotes").hide();
        $("#divEditNotes").hide();
        $("#divStudies").hide();
        $("#divAddStudies").hide();
        $("#divEditStudies").hide();
        $("#divExpenses").show();
        $("#divAddExpenses").hide();
        $("#divEditExpenses").hide();
        $("#divRecipes").hide();
        $("#divAbout").hide();
        $("#divApp").hide();
        $("#divSong").hide();
        $("#divProfile").hide();
    });

    $("#frmAddExpenses").submit(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var date = $("#date").val();
        var itemsprice = $("#itemsprice").val();
        var total = $("#total").val();

        var datalist = "date=" + date + " &itemsprice=" + itemsprice + "&total=" + total + "&owneremail=" + sessionStorage.ttoken;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/AddExpenses",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                if (myData.status === 1) {
                    alert("Add Expenses Success!");
                    $("#divNotes").hide();
                    $("#divAddNotes").hide();
                    $("#divEditNotes").hide();
                    $("#divStudies").hide();
                    $("#divAddStudies").hide();
                    $("#divEditStudies").hide();
                    $("#divExpenses").show();
                    $("#divAddExpenses").hide();
                    $("#divEditExpenses").hide();
                    $("#divRecipes").hide();
                    $("#divAbout").hide();
                    $("#divApp").hide();
                    $("#divSong").hide();
                    $("#divProfile").hide();
                }
                else {
                    alert("Add Expenses Failed");
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
    });

    $("#frmEditExpenses").submit(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var date = $("#date100").val();
        var itemsprice = $("#itemsprice100").val();
        var total = $("#total100").val();
        var expensesid = $("#expensesid").val();

        var datalist = "date=" + date + " &itemsprice=" + itemsprice + "&total=" + total + "&expensesid=" + expensesid;
        $.ajax({
            type: "post",
            url: "http://172.17.64.91:8080/FrontEnd/UpdateExpensesDataById",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                if (myData.status === 1) {
                    alert("Update Expenses Success!");
                    $("#divEditNotes").hide();
                    $("#divNotes").hide();
                    $("#divStudies").hide();
                    $("#divEditStudies").hide();
                    $("#divEditExpenses").hide();
                    $("#divExpenses").show();
                    $("#divRecipes").hide();
                    $("#divAbout").hide();
                    $("#divApp").hide();
                    $("#divSong").hide();
                    $("#divProfile").hide();
                }
                else {
                    alert("Update Expenses Failed");
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });
    });

    $("#tblExpenses tbody").on("click", "span", function () {
        var processexpensesid = $(this).data("processexpensesid");
        var expensesid = $(this).data("expensesid");
        datalist = "expensesid=" + expensesid;
        if(processexpensesid==1){
        var parentTR = $(this).parent().parent().parent();
        bootbox.confirm("Are you sure to delete this expenses?", function (answer) {
            if (answer) {
                $.ajax({
                    type: "post",
                    url: "http://172.17.64.91:8080/FrontEnd/DelExpensesById",
                    data: datalist,
                    cache: false,
                    success: function (mydata) {
                        var myData = JSON.parse(mydata);
                        if (myData.status === 1) {
                            alert("Delete Expenses Successfull!");
                            $(parentTR).fadeOut("slow", "swing", function () {
                                $(parentTR).remove();
                            });
                        }
                        else {
                            alert("Delete Expenses Failed");
                        }
                    },
                    error: function () {
                        console.log("ajax error!");
                        alert("Please contact admin!");
                    }
                });
            }
            else {
                bootbox.alert("Delete cancelled!");
            }
        });
    }else{
        var link52 = crossroads.addRoute("/viewexpenses/{id}", function (id) {

            var datalist = "id=" + id;
            $.ajax({
                type: "post",
                url: "http://172.17.64.91:8080/FrontEnd/GetExpensesDataById",
                data: datalist,
                cache: false,
                success: function (mydata) {
                    var myData = JSON.parse(mydata);
    
                    if (myData.status === 1) {
                        document.getElementById("date100").value = myData.date;
                        document.getElementById("itemsprice100").value = myData.itemsprice;
                        document.getElementById("total100").value = myData.total;
                        document.getElementById("expensesid").value = myData.id;
                    }
                    $("#divHome").hide();
                    $("#divNotes").hide();
                    $("#divAddNotes").hide();
                    $("#divEditNotes").hide();
                    $("#divStudies").hide();
                    $("#divAddStudies").hide();
                    $("#divEditStudies").hide();
                    $("#divExpenses").hide();
                    $("#divAddExpenses").hide();
                    $("#divEditExpenses").show();
                    $("#divRecipes").hide();
                    $("#divAbout").hide();
                    $("#divApp").hide();
                    $("#divSong").hide();
                    $("#divProfile").hide();
                },
                error: function () {
                    console.log("ajax error!");
                    alert("Please contact admin!");
                }
            });
        });
    }
    });

    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }

    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

});
