from .models import Dicas,Aluno
from .serializers import DicaSerializer,UserSerializer,AlunoSerializer,ProfessorSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User




class UserViewSet(viewsets.ModelViewSet):
  queryset=User.objects.all()
  serializer_class=UserSerializer


#USING MODELVIEWSET

class DicaViewSet(viewsets.ModelViewSet):
  queryset = Dicas.objects.all()
  serializer_class=DicaSerializer
  permission_classes = [IsAuthenticated]
  authentication_classes = (TokenAuthentication,)

class AlunoViewSet(viewsets.ModelViewSet):
  queryset = Aluno.objects.all()
  serializer_class=AlunoSerializer
  