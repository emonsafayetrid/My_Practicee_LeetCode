let arr=[10, 30, -9, -20, 15, -5];
function neg_pos(arr)
{
    let i=0,j=0;
    while(i<arr.length)
        {
            if(arr[i]<0)
            {
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                j++;
            }           
            i++;
            
        }
   console.log(arr); 
}
neg_pos(arr);