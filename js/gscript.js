
      
      var script_url = "https://script.google.com/macros/s/AKfycbx1mt3cRmSRuy_YxHKt05L2xYgES0pLp4i7EtVe5VLKKBnckYZhcgw8e2oZX-qRo9Q/exec";
      
      // Make an AJAX call to Google Script
      function insert_value() {
        
        $("#re").css("visibility","hidden");
         document.getElementById("loader").style.visibility = "visible";
        $('#mySpinner').addClass('spinner');
    
        var id1=	$("#id").val();
        var name= $("#name").val();
        var weburl= $("#weburl").val();
        var supurl= $("#supurl").val();
        var va= $("#va").val();
        
        
        var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&weburl="+weburl+"&supurl="+supurl+"&va="+va+"&action=insert";
        
    
        var request = jQuery.ajax({
          crossDomain: true,
          url: url ,
          method: "GET",
          dataType: "jsonp"
        });
    
      }
    
    
      
      
     
      
      
      function update_value(){
        $("#re").css("visibility","hidden");
         document.getElementById("loader").style.visibility = "visible";
        
        
       var id1=	$("#id").val();
        var name= $("#name").val();
        var weburl= $("#weburl").val();
        var supurl= $("#supurl").val();
        var va= $("#va").val();
        
        var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&weburl="+weburl+"&supurl="+supurl+"&va="+va+"&action=update";
        
    
        var request = jQuery.ajax({
          crossDomain: true,
          url: url ,
          method: "GET",
          dataType: "jsonp"
        });
    
        
      }
    
      
     
      
      
      function delete_value(){
        $("#re").css("visibility","hidden");
         document.getElementById("loader").style.visibility = "visible";
        $('#mySpinner').addClass('spinner');
        var id1=	$("#id").val();
        var name= $("#name").val();
        var weburl= $("#weburl").val();
        var supurl= $("#supurl").val();
        var va= $("#va").val();
        
        
        var url = script_url+"?callback=ctrlq&name="+name+"&id="+id1+"&weburl="+weburl+"&supurl="+supurl+"&va="+va+"&action=delete";
        
    
        var request = jQuery.ajax({
          crossDomain: true,
          url: url ,
          method: "GET",
          dataType: "jsonp"
        });
    
      }
    
    
      
      
      // print the returned data
      function ctrlq(e) {
      
        
        $("#re").html(e.result);
        $("#re").css("visibility","visible");
        read_value();
        
      }
      
      
    
      
    function read_value() {
    
    $("#re").css("visibility","hidden");
       
       document.getElementById("loader").style.visibility = "visible";
     var url = script_url+"?action=read";
    
    $.getJSON(url, function (json) {
    
        // Set the variables from the results array
       
       
      
    
            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
    
            
    
            var header = table.createTHead();
            var row = header.insertRow(0);     
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
        
            cell1.innerHTML = "<b>Asin</b>";
            cell2.innerHTML = "<b>Store Name</b>";
            cell3.innerHTML = "<b>Time stamp</b>";
            
            
            // ADD JSON DATA TO THE TABLE AS ROWS.
            for (var i = 0; i < json.records.length; i++) {
    
                tr = table.insertRow(-1);
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = json.records[i].ID;
                    tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = json.records[i].NAME;
                    tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = json.records[i].Time_stamp;
                    tabCell = tr.insertCell(-1);
                }
          
    
            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            document.getElementById("loader").style.visibility = "hidden";
            $("#re").css("visibility","visible");
        });
        }
