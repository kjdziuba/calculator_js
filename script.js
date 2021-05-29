//js scripts

var ops = [];
var nums = [];
var newNum = false;

function addNum(num)
{
	if(newNum)
	{
		document.getElementById("text").value = "";
		newNum = false;
	}
	document.getElementById("text").value = document.getElementById("text").value + num;
}

function chooseOp(op)
{
	nums.push(document.getElementById("text").value);
	ops.push(op);
	newNum = true;

}
function equals()
{
	nums.push(document.getElementById("text").value);
	ans = parseFloat(nums[0]);

	for (var i = 0; i < ops.length; i++) {
		if(ops[i] == "+") ans = ans + parseFloat(nums[i+1]);
		if(ops[i] == "-") ans = ans - parseFloat(nums[i+1]);
		if(ops[i] == "x") ans = ans * parseFloat(nums[i+1]);
		if(ops[i] == "/") ans = ans / parseFloat(nums[i+1]);
	}

	document.getElementById("text").value = ans;
	newNum = true;
	nums = [];
	ops =[];
}

function clearTheField()
{
	document.getElementById("text").value = "";
	newNum = true;
	nums = [];
	ops =[];
}

function deleteLast()
{
	var str = document.getElementById("text").value;
	document.getElementById("text").value = str.substring(0, str.length - 1);
}