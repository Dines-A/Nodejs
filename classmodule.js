class myclass {

    constructor(name)
    {
        this.name= name;
    }
    myfun()
    {
        console.log("my name is  "  + this.name);
    }
}

exports.myclass = myclass;