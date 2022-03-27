import os

quantidade = 0
pasta = "E:\ceap\LP31\Renomear Auto"
for diretorio, subpastas, arquivos in os.walk(pasta):
    for arq in arquivos:
        extensaoPDF = arq.find(".pdf")
        extensaoJPG = arq.find(".jpg")
        if extensaoPDF >= 0:
            quantidade +=1
            fonte = os.path.join(diretorio, arq)
            nome = "Caderno - LP31- Otávio lira neves {}.pdf".format(quantidade)
            destinoPDF = os.path.join(diretorio, nome)
            print("Arquivo encontrado " + os.path.join(diretorio, arq))
            os.rename(fonte, destinoPDF)
        elif extensaoJPG >= 0:
             quantidade +=1
             fonte = os.path.join(diretorio, arq)
             nome = "Caderno - LP31- Otávio lira neves {}.pdf".format(quantidade)
             destinoJPG = os.path.join(diretorio, nome)
             print("Arquivo encontrado " + os.path.join(diretorio, arq))
             os.rename(fonte, destinoJPG)
print("Quantidade de arquivos encontrados e renomeados:",quantidade)

