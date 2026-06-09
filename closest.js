function isClosest(n,m)
{
    let q= Math.round(n/m);

    let n1=q*m;
    let n2=m*(q+(n1<n ? 1:-1));

    let dis1= Math.abs(n-n1);
    let dis2= Math.abs(n-n2);

    if(dis1<dis2)
    {
        console.log(n1);
    }
    else if(dis2<dis1)
    {
        console.log(n2);
    }
    else
    {
        if(Math.abs(n1)>Math.abs(n2))
        {
            console.log(n1);
        }
        else
        {
            console.log(n2);
        }
    }
}
isClosest(13,4);
isClosest(-15,6);


