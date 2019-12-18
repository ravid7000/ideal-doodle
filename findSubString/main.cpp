#include <iostream>

using namespace std;

const int no_of_chars = 256;

string findSubString(string str, string pat) {
    int strLen = str.length();
    int patLen = pat.length();

    if (strLen < patLen) {
        cout << "No substring";
        return "";
    }

    int has_pat[no_of_chars] = {0};
    int has_str[no_of_chars] = {0};

    for (int i = 0; i < patLen; i++) {
        has_pat[pat[i]]++;
    };

    cout << has_pat;


    return "a";
}

int main() {
    string s1 = "This is a test string";
    string s2 = "tist";
    cout << findSubString(s1, s2) << endl;
    return 0;
}
