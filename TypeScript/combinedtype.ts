type employee ={
    name : string;
    department : string;
};
type playes={
    teams : string
}

type combine = employee & playes;

const sachin:combine ={
    name : "sachin",
    department : "IT",
    teams : "CSK"
}
console.log(sachin);