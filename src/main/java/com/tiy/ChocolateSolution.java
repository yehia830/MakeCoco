package com.tiy;

public class ChocolateSolution {
    public int smalls;
    public int bigs;
    public boolean hasSolution = false;

    public void setNoSolution() {
        smalls = -1;
        bigs = -1;
        hasSolution = false;
    }

    public void setSolution(int smalls, int bigs) {
        hasSolution = true;
        this.smalls = smalls;
        this.bigs = bigs;
    }
}