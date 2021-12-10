var index = 0; //index of the train based on the order of entering the yard
//boolean validS1 - S13 accordingly for each blockSection, marking whether the blockSection is valid or occupied
//initial status is all true as there is no train in the yard
var validS1 = true; 
var validS2 = true; 
var validS3 = true;
var validS4 = true; 
var validS5 = true; 
var validS6 = true; 
var validS7 = true; 
var validS8 = true;
var validS9 = true; 
var validS10 = true; 
var validS11 = true; 
var validS12 = true; 
var validS13 = true;

//add train from blockSection 1
function newTrainEast1()
{
    console.log(validS1);
    if(validS1) //if blockSection 1 is valid, create a train and add it on blockSection 1
    {
        index++;
        var trainN = new createTrain('Train'+index, 'East', 1);
        yard_trains.push(trainN);
        validS1 = false;
        console.log(trainN.blockSection);
        updateYard(yard_trains);
    }
}

//add train from blockSection 4
function newTrainEast4()
{
    if(validS4)  //if blockSection 4 is valid, create a train and add it on blockSection 4
    {
        index++;
        var trainN = new createTrain('Train'+index, 'East', 4);
        yard_trains.push(trainN);
        validS4 = false;
        updateYard(yard_trains);
    }
}

//add train from blockSection 8
function newTrainWest8() 
{
    if(validS8) //if blockSection 8 is valid, create a train and add it on blockSection 8
    {
        index++;
        var trainN = new createTrain('Train'+index, 'West', 8);
        yard_trains.push(trainN);
        validS8 = false;
        updateYard(yard_trains);
    }
}

//function of moving a train while clicking
//call moveEast or moveWest according to the train's direction
function trainMove(train)
{
    if(train.direction=='East')
    {
        moveEast(train);
    }
    else
    {
        moveWest(train);
    }
    updateYard(yard_trains);
}

//constructor of object train with arguments
function createTrain(name, direction, blockSection)
{
    this.name = name;
    this.direction = direction;
    this.blockSection = blockSection;
    console.log(this.blockSection);
}

//function for trains with direction east
function moveEast(train)
{
    switch(train.blockSection)
    {
        case 1:
            if(validS2)
            {
                train.blockSection = 2;
                validS1 = true;
                validS2 = false;
            }
            else if(validS6)
            {
                train.blockSection = 6;
                validS1 = true;
                validS6 = false;
            }
            else if(validS11)
            {
                train.blockSection = 11;
                validS1 = true;
                validS11 = false;
            }
            break;

        case 2:
            if(validS3)
            {
                train.blockSection = 3;
                validS3 = false;
                validS2 = true;
            }
            break;

        case 3:
            for(i in yard_trains)
            {
                if(yard_trains[i].blockSection==3)
                {
                    yard_trains[i].blockSection==0;
                    yard_trains.splice(i, 1);
                    console.log(i);
                    validS3 = true;
                    break;
                }
            }
            for(i in yard_trains)
            {
                console.log(yard_trains[i].name);
            }
            break;
            
        case 4:
            if(validS5)
            {
                train.blockSection = 5;
                validS5 = false;
                validS4 = true;
            }
            else if(validS10)
            {
                train.blockSection = 10;
                validS10 = false;
                validS4 = true;
            }
            break;


        case 5:
            if(validS6)
            {
                train.blockSection = 6;
                validS6 = false;
                validS5 = true;
            }
            else if(validS11)
            {
                train.blockSection = 11;
                validS11 = false;
                validS5 = true;
            }
            break;


        case 6:
            if(validS3)
            {
                train.blockSection = 3;
                validS3 = false;
                validS6 = true;
            }
            break;


        case 10:
            if(validS11)
            {
                train.blockSection = 11;
                validS11 = false;
                validS10 = true;
            }
            //for east side, train can not go to blockSection 13 from blockSection 10
            break;


        case 11:
            if(validS3)
            {
                train.blockSection = 3;
                validS3 = false;
                validS11 = true;
            }
            break;
    }
}

//function for trains with direction west
function moveWest(train)
{
    switch(train.blockSection)
    {
        case 5:
            if(validS9)
            {
                train.blockSection = 9;
                validS9 = false;
                validS5 = true;
            }
            break;

        case 6:
            if(validS5)
            {
                train.blockSection = 5;
                validS5 = false;
                validS6 = true;
            }
            break;


        case 7:
            if(validS6)
            {
                train.blockSection = 6;
                validS6 = false;
                validS7 = true;
            }
            else if(validS11) 
            {
                train.blockSection = 11;
                validS11 = false;
                validS7 = true;
            }
            break;

        case 8:
            if(validS7)
            {
                train.blockSection = 7;
                validS7 = false;
                validS8 = true;
            }
            else if(validS12) 
            {
                train.blockSection = 12;
                validS12 = false;
                validS8 = true;
            }
            break;

        case 9:
            for(i in yard_trains)
            {
                if(yard_trains[i].blockSection==9)
                {
                    yard_trains[i].blockSection==0;
                    yard_trains.splice(i, 1);
                    validS9 = true;
                    break;
                }
            }
            break;

        case 10:
            if(validS9)
            {
                train.blockSection = 9;
                validS9 = false;
                validS10 = true;
            }
            break;

        case 11:
            if(validS5)
            {
                train.blockSection = 5;
                validS5 = false;
                validS11 = true;
            }
            else if(validS10) 
            {
                train.blockSection = 10;
                validS10 = false;
                validS11 = true;
            }
            break;

        case 12:
            if(validS11)
            {
                train.blockSection = 11;
                validS11 = false;
                validS12 = true;
            }
            else if(validS13) 
            {
                train.blockSection = 13;
                validS13 = false;
                validS12 = true;
            }
            break;

        case 13:
            if(validS10)
            {
                train.blockSection = 10;
                validS10 = false;
                validS13 = true;
            }
            break;
    }
}

