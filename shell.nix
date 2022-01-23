{ pkgs ? import <nixpkgs> {} }:
let
  my-python = pkgs.python3;
  python-with-my-packages = my-python.withPackages (p: with p; [
    cirq
    qiskit
    pytorch
    matplotlib
    torchvision
  ]);
in
pkgs.mkShell {
  buildInputs = [
    python-with-my-packages
    jupyter
  ];
  shellHook = ''
    PYTHONPATH=${python-with-my-packages}/${python-with-my-packages.sitePackages}
    # maybe set more env-vars
  '';
}
