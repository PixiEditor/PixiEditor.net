with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "yarn";
    buildInputs = [
        yarn
    ];
}
