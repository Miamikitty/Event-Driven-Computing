var index, strLength, endIndex = 0; //variables to store the index, length and the last index of the input string
var input = ''; //variable to store the input string

//my regext: c*ba+a|b+c
//according to the diagram, state56(S5,S6) or state6(S6) should be the end if the input matches the regex 


function checkMatch(str) 
{
    index = 0;
    strLength = str.length;
    endIndex = strLength-1;
    input = str;
    console.log("---------------------");
    if(strLength<2)
    {
        return false;
    }
    else if(input[index]=='b')
    {
        return state34();
    }
    else if(input[index]=='c')
    {
        return state1();
    }
    else
    {
        return false;
    }
}

//c~
function state1()
{
    if(index<endIndex)
    {
        index++;
    }
    else
    {
        return false;
    }

    for(index; index<strLength; index++)
    {
        if(input[index]=='c')//c*
        {
            continue;
        }
        else if(input[index]=='b'&&index<endIndex)
        {
            return state3();//match the condition to state3 
        }
        else
        {
            return false;
        }
    }
    return false; //for loop finished, end up with state1
}

//b~
function state34()
{
    if(index<endIndex)
    {
        index++;
    }
    else
    {
        return false;
    }

    if(input[index]=='a')
    {
        return state5();
    }
    else if(input[index]=='b')
    {
        return state4();
    }
    else if(input[index]=='c')
    {
        return state6();
    }
    else 
    {
        return false;
    }
}

function state3()
{
    if(index<endIndex)
    {
        index++;
    }
    else
    {
        return false;
    }

    console.log("index:" + index);
    if(input[index]=='a')
    {
        return state5();
    }
    else
    {
        return false;
    }
}

function state4()
{
    if(index<endIndex)
    {
        index++;
    }
    else
    {
        return false;
    }

    for(index; index<strLength; index++)
    {
        if(input[index]=='b')
        {
            continue;
        }
        else if(input[index]=='c')
        {
            return state6();
        }
        else 
        {
            return false; //a letter other than 'b' or 'c' cannot go any further
        }
    }
    return false; //for loop finished, end up with state4
}

function state5()
{
    if(index<endIndex)
    {
        index++;
    }
    else
    {
        return false;
    }
    
    //console.log("index:" + index);
    if(input[index]=='a')
    {
        return state56();
    }
    else
    {
        return false;
    }
}

function state6()
{
    if(index==endIndex)
    {
        return true; //end up with state6
    }
    else
    {
        return false; //something more after state6, unmatched
    }
}

function state56()
{
    for(index; index<strLength; index++)
    {
        if(input[index]=='a')
        {
            continue;
        }
        else
        {
            return false;
        }
    }
    return true; 
    //for loop finished, end up with state56
}



//my regext: c*ba+a|b+c
//Function myCheckMatch is another way created by me regardless of the requirements of the course. I think it is much more efficient than the teacher's solution.
function myCheckMatch(str) 
{
    index = 0;
    strLength = str.length;
    endIndex = strLength-1;
    input = str;
    var lastTwo = input[endIndex-1]+input[endIndex];
    console.log("---------------------");
    if(strLength<2)
    {
        return false;
    }
    else if(lastTwo=="bc")
    {
        return regex2();
    }
    else if(lastTwo=="aa")
    {
        return regex1();
    }
    else
    {
        return false;
    }
}


//regex 1: c*ba+a
function regex1()
{
    //check c*
    for(index; index<strLength; index++)
    {
        if(input[index]=='c')
        {
            continue;
        }
        else
        {
            break;
        }   
    }

    //check ~b
    if(input[index]=='b')
    {
        index++;
        if(input[index]=='a')
        {
            for(index; index<strLength; index++)
            {
                if(input[index]=='a')
                {
                    continue;
                }
                else
                {
                    return false;
                }
            }
            return true;
        }
        else //no a after b
        {
            return false;
        }
    }
    //no b
    return false;
}

function regex2()
{
    //check bbbbbbbbbbbbbbbbbbbbbb+
    for(index; index<strLength; index++)
    {
        if(input[index]=='b')
        {
            continue;
        }
        else
        {
            break;
        }
    }
    //check ~c
    if(input[index]=='c')
    {
        return true;
    }
    else
    {
        return false;
    }
}
