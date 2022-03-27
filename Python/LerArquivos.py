import os

quantidade = 0
pasta = "E:\ceap\LP31\Aula 11 e 12"
for diretorio, subpastas, arquivos in os.walk(pasta):
    for arq in arquivos:
        extensao = arq.find(".py")
        if extensao == 6:
            quantidade +=1
            print("Arquivo encontrado " + os.path.join(diretorio, arq))
print("Quantidade de arquivos encontrados:",quantidade)
        
