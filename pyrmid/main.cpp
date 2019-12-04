#include <iostream>
using namespace std;

void pyrmid(int n) {
  for (int i = 0; i < n; i++) {
    for (int j = i; j >= 0; j--) {
      cout << "* ";
    }
    cout << endl;
  }
}

int main() {
  int n = 5;
  pyrmid(n);
  return 0;
}
