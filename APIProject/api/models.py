from django.db import models


# Create your models here.
class Aluno(models.Model):
  nome = models.CharField(max_length=100)
  email = models.EmailField(max_length=254)
  sexo = models.CharField(max_length=2)
  peso = models.FloatField()
  altura =models.IntegerField()
  idade =models.IntegerField()
  nivel =models.IntegerField()
  esporte = models.CharField(max_length=20)

  def __str__(self):
    return f"{self.nome}"

class Professor(models.Model):
  nome = models.CharField(max_length=100)
  email = models.EmailField(max_length=254)
  
  
  def __str__(self):
    return f"{self.nome}"

class Dicas(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField()
  aluno = models.ForeignKey(Aluno,on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.aluno}"