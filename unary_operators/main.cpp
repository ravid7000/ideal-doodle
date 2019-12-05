#include <iostream>
using namespace std;

void pointer() {
  int arr[4] = {1,2,3,4};
  int *ptr1 = &arr[0];
  int *ptr2 = ptr1++;
  cout << *ptr1 << endl << *ptr2 << endl;
}

void floatingPoints() {
  double a = 0.1;
  double b = 0.2;
  double c = 0.3;
  if (a + b == c)
    cout << "a + b == c" << c << endl;
  else
    cout << "a + b != c " << a << b << c << endl; 
}

int main() {
  floatingPoints();
}
