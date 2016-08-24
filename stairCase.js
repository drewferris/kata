/*
 * Complete the function below.
 */
function StairCase(input) {
    var n = parseInt(input);

    for(var i = 0; i < n; i++)
    {
        var s = "";
        for(var j = 0; j < n; j++)
        {
            if(n - i - 2 < j)
            {
                s += "#";
            }
            else
            {
                s += " ";
            }
        }
        console.log(s);
    }
}
