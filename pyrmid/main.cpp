#include <iostream>
#include "pyrmid.h"
using namespace std;

int main() {
  int n = 5;
  pyrmid(n);
  return 0;
}

void pyrmid(int n) {
  for (int i = 0; i < n; i++) {
    for (int j = i; j >= 0; j--) {
      cout << "* ";
    }
    cout << endl;
  }
}
