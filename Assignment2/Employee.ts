class Employee{
    eid:number;
    empname:string;
    deptno:number
    salary:number
    HRA:number
    DA:number
    grossSalary:number

    constructor(eid:number,empname:string,deptno:number,salary:number)
    {
        this.eid=eid;
        this.empname=empname;
        this.deptno=deptno;
        this.salary=salary;       
    }
    calculateGrossSalary():void{
        
        if(this.salary<20000)
        {
            this.HRA=this.salary*.20;
            this.DA=this.salary*.80;
            this.grossSalary=this.salary+this.HRA+this.DA;
        }
        else
        {
            this.HRA=this.salary*.25;
            this.DA=this.salary*.70;
            this.grossSalary=this.salary+this.HRA+this.DA;
        }

    }
    displayData():void{
        console.log("EmpId:"+this.eid+" EmpName:"+this.empname+" DeptNo:"+this.deptno+" Salary:"+this.salary+" HRA:"+this.HRA+" DA:"+this.DA+" GrossSalary:"+this.grossSalary);
    }

}
var emp=new Employee(101,'abc',1212,25000);
emp.calculateGrossSalary();
emp.displayData();