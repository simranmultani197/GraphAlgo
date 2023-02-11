import React, { useState } from 'react';
import SingleDiv from '../Components/SingleDiv'
import Select from 'react-select';
import Button from 'react-bootstrap/Button'

const options = [
    { value: 'Depth First Search', label: 'Depth First Search' },
    { value: 'Breadth First Search', label: 'Breadth First Search' },
    
  ];

const GridStructure=(props)=>{
    let [StartPoint,setStartPoint]=useState(false);
    let [EndPoint,setEndPoint]=useState(false);
    let [Obstacles,setObstacles]=useState(-1);
    let [StartPointid,setStartPointid]=useState(-1);
    let [EndPointid,setEndPointid]=useState(-1);

    const [selectedOption,setselectedOption]=useState(options[0])

    const handleChange = selectedOption => {
        setselectedOption( selectedOption );
    };

    function depth_first(){
        var stack= Array();
        
        stack.push(parseInt(StartPointid));
        let map={};
        let iteration=0;
        while(stack.length!=0){
            let length=stack.length;
            let topelement=parseInt(stack[length-1]);
            stack.pop();

            if(map[topelement]==1){
                continue;
            }

            map[topelement]=1;
            let check=0;
            let remainder=topelement%50; 
            if(topelement==EndPointid ){
                iteration++;
              
                setTimeout(() => {
                    document.getElementById(EndPointid).style.backgroundColor="red";
                    
                }, iteration*8);
                break;
                
            }

            if(topelement!=StartPointid){
                iteration++;
                setTimeout(() => {
                
                    document.getElementById(topelement).style.backgroundColor="#6495ED";
                },iteration*8);
            }
           
          

            if(topelement+50<=1500 && map[topelement+50]!=1 && topelement!=EndPointid && document.getElementById(topelement+50).style.backgroundColor!="black"){
                stack.push(topelement+50);  
                check=1;
            }

           if(topelement-50>=1 && map[topelement-50]!=1 && topelement!=EndPointid && document.getElementById(topelement-50).style.backgroundColor!="black"){
                stack.push(topelement-50);
                check=1;
            }

            if(topelement-1>=1 && map[topelement-1]!=1 && topelement!=EndPointid && remainder!=1 && document.getElementById(topelement-1).style.backgroundColor!="black"){
                stack.push(topelement-1); 
                check=1;
            }

          if(topelement+1<=1500 && map[topelement+1]!=1 && topelement!=EndPointid && remainder!=0 && document.getElementById(topelement+1).style.backgroundColor!="black"){
                stack.push(topelement+1);
                check=1;
            }
        }
    }


 
    
    function breadth_first(){
        var queue= Array();
        queue.push(parseInt(StartPointid));   
        let map={};
        let iteration=0;
       
        
        while(queue.length!=0){
            let topelement=parseInt(queue[0]);
            map[topelement]=1;
            queue.shift();
            let check=0;
            let remainder=topelement%50;
            if(topelement==EndPointid ){
                iteration++;
               
                setTimeout(() => {
                    document.getElementById(EndPointid).style.backgroundColor="red";
                    
                }, iteration*8);
                break;
                
            }

            if(topelement!=StartPointid){
                iteration++;
                setTimeout(() => {
                
                    document.getElementById(topelement).style.backgroundColor="#6495ED";
                },iteration*8);
        }
           
          
           
            if(topelement+50<=1500 && map[topelement+50]!=1 && topelement!=EndPointid && document.getElementById(topelement+50).style.backgroundColor!="black"){
                queue.push(topelement+50);
                map[topelement+50]=1;
                
                check=1;
            }
            
            
            
            if(topelement-50>=1 && map[topelement-50]!=1 && topelement!=EndPointid && document.getElementById(topelement-50).style.backgroundColor!="black"){
                queue.push(topelement-50);
                map[topelement-50]=1;
                
                check=1;
            }
            if(topelement-1>=1 && map[topelement-1]!=1 && topelement!=EndPointid && remainder!=1 && document.getElementById(topelement-1).style.backgroundColor!="black"){
                queue.push(topelement-1);
                map[topelement-1]=1;
                
                check=1;
            }
            if(topelement+1<=1500 && map[topelement+1]!=1 && topelement!=EndPointid && remainder!=0 && document.getElementById(topelement+1).style.backgroundColor!="black"){
                queue.push(topelement+1);
                map[topelement+1]=1;
                
                check=1;
                }
        }
    }    




    function setpoints(event){
        if(StartPoint==false){
            StartPoint=true;
            event.target.style.backgroundColor="green";
            setStartPointid(event.target.id)
            setStartPoint(true);
        }
        else if(EndPoint==false){
            EndPoint=true;
            setObstacles(0);
            event.target.style.backgroundColor="orange";
            setEndPointid(event.target.id);
            setEndPoint(true);

        }
        else {
            event.target.style.backgroundColor="black";
        
        }  
    }

    function doneobstacles(){
        if(selectedOption.label=='Depth First Search')
          depth_first();
        else if(selectedOption.label=='Breadth First Search'){
            breadth_first();
        }  
      
        setObstacles(1);     
        
    }




    
    let Grid=Array(50);
    for(let i=0;i<50;i++){
        Grid[i]=i;
    }
   
    let row=0;
    let column=1;
    let obstacle_heading;
    if(Obstacles==0){
        obstacle_heading="Visualize";
    }
    
    return(
        
        <div>
            <div class="algo_selector">
            <div id="chooseAlgo">
                <Select
                    classNamePrefix='filter'
                    placeholder={selectedOption.label}
                    value={selectedOption.label}
                    onChange={handleChange}
                    options={options}
                />
                
            </div>
            <div>
            {obstacle_heading? <Button variant="primary" onClick={doneobstacles}>{obstacle_heading}</Button>:null} 
            </div>
            </div>
        
            <div>
                <div style={{width:"100%",height:"80vh",paddingRight:"2%",paddingLeft:"2%"}}>
                {Grid.map((i)=>{
                    
                    if(i<30){

                        let outerelement=<div style={{display:"flex", width:"100%",height:"3%"}} key={i}>{
                        Grid.map((i)=>{
                            let element=<div onClick={(event)=>setpoints(event)} key={row*5+column} id={row*5+column} style={{width:"5%",border:"1px solid black"}}></div>;
                            
                            column=column+1;
                            return element;
                
        
                    
                        })}
                        </div>
                    row=row+10;
                    column=1;

                    return outerelement;
                    }    
                })}
                </div>
            </div>
        </div>
    )
}

export default GridStructure;