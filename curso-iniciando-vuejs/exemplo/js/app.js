var hello = new Vue({
    el:'#hello',
    data:{
        msg:"Hello Vue!",
        people:[
            {name:"Maria"},
            {name:"Pedro"},
            {name:"João"},
            {name:"Gustavo"},
            {name:"Ana"}
        ],
        newElement:'',
        elements:[],
        myListForm:[

        ],
        myForm:{
            name:'',
            email:''
        }
    },
    methods:{
        addElement: function(e){
            var title = this.newElement.trim();
            if(title){
                this.elements.push({title:title});
                this.newElement= "";
            }
            e.preventDefault();
        },
        removeElement: function(e,index){
            e.preventDefault();
            this.elements.splice(index,1);
        },
        myClick:function(){
            alert('Click');
        },
        myKeyUp:function(){
          alert('myKeyUp');
        },
        addForm:function(){
            this.myListForm.push({name:this.myForm.name,email:this.myForm.email});
            this.myForm.name='';
            this.myForm.email='';
        }
    }

});