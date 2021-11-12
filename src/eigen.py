import numpy as np
import sympy as sp
from sympy.abc import tau, X

def nilaiEigen(m):
    # Mendapatkan nilai eigen terurut dari membesar ke kecil
    l = sp.Symbol('l')
    a = sp.Matrix(np.diag([l for i in range(len(m))]))
    m2 = a - sp.Matrix(m)
    output = list(reversed(sp.solve(sp.Eq(m2.det(),0))))
    return(output)
    
def vektorEigen(m,nE):
    # Mendapatkan vektor eigen terurut sesuai nilai eigen
    for i in range(0,len(nE)):
        a = sp.Matrix(np.diag([nE[i] for j in range(len(m))]))
        m2 = a - sp.Matrix(m)
        m3 = np.zeros(len(m))
        augmented = np.c_[np.array(m2), m3]
        rref = sp.Matrix(augmented).rref()[0]
        sol = sp.Matrix(sp.linsolve(rref).args[0])
        for k in range(len(sol)):
            if (k != 0):
                if sol[0].free_symbols != sol[k].free_symbols:
                    symbols = (sol[k].free_symbols)
                    for s in symbols:
                        symbol = s
                    for o in range(0,len(sol)):
                        if (sol[o].free_symbols == symbols):
                            if o == 0:
                                vektemp = list(sp.Array([sol[o].subs(symbol,1)]))
                            else:
                                vektemp.append(sol[o].subs(symbol,1))
                        else:
                            if o == 0:
                                vektemp = list(sp.Array([0]))
                            else:
                                vektemp.append(0)
                    if (i == 0) and (k == 0):
                        vektor = np.array(vektemp)
                    else:
                        vektor = np.c_[vektor,np.array(vektemp)]
            else:
                symbols = (sol[k].free_symbols)
                for s in symbols:
                    symbol = s
                for o in range(0,len(sol)):
                    if (sol[o].free_symbols == symbols):
                        if o == 0:
                            vektemp = list(sp.Array([sol[o].subs(symbol,1)]))
                        else:
                            vektemp.append(sol[o].subs(symbol,1))
                    else:
                        if o == 0:
                            vektemp = list(sp.Array([0]))
                        else:
                            vektemp.append(0)
                if (i == 0) and (k == 0):
                    vektor = np.array(vektemp)
                else:
                    vektor = np.c_[vektor,np.array(vektemp)]
    return vektor


mat = np.array([[0,0,-2],[1,2,1],[1,0,3]])
nE = nilaiEigen(mat)
print(nE)
print(" ")
vE = vektorEigen(mat,nE)
print(vE)