from rest_framework import serializers
from .models import  Dicas, Aluno, Professor
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

class DicaSerializer(serializers.ModelSerializer):
  class Meta:
    model = Dicas
    fields = ['id','title','description','aluno']

class AlunoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Aluno
    fields = ['id','nome','email','sexo','peso','altura','idade','nivel','esporte']



class ProfessorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Professor
    fields = ['id','nome','email']


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields =['id','username','password']

    extra_kwargs = {'password':{
      'write_only': True,
      'required': True
    }}
  
  def create(self,validated_data):
    user = User.objects.create_user(**validated_data)
    Token.objects.create(user=user)
    return user