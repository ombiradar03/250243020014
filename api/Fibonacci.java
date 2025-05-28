public class Fibonacci{
  public static void main(String args[])
  {
   int val=10;
   int num1=0,num2=1;
   if(val<=0)
     System.out.println("Enter the valid number");
   else{
        System.out.print("Fibonacci series up to "+val+" is : ");
        for(int i=1; i<=val; i++)
        {
         System.out.print(num1+" ");
         int temp =num1+num2;
         num1=num2;
         num2=temp;
        }
        System.out.println();
       }
  }

}