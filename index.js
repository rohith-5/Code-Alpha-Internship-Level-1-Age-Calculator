        let userinput=document.getElementById("date");
        let res=document.getElementById("res");
        
        function calculateAge(){
            let birthdate=new Date(userinput.value);
            let d1=birthdate.getDate();
            let m1=birthdate.getMonth()+1;
            let y1=birthdate.getFullYear();
            let today=new Date();
            let d2=today.getDate();
            let m2=today.getMonth()+1;
            let y2=today.getFullYear();
            let d3,m3,y3;
            y3=y2-y1;
            if(m2>=m1){
                m3=m2-m1;
            }
            else{
                y3--;
                m3=12+m2-m1;
            }
            if(d2>=d1){
                d3=d2-d1;
            }
            else{
                m3--
                d3=getDaysInMonth(y1,m1)+d2-d1;
            }
            if(m3<0){
                m3=11;
                y3--;
            }
            
            
            res.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months ans <span>${d3}</span> days old`;
            
        }

        function getDaysInMonth(y,m){
            return new Date(y,m,0).getDate();
        }