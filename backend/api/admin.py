from django.contrib import admin
from .models import Dicas,Professor,Aluno
# Register your models here.


# admin.site.register(Article)
@admin.register(Dicas)
class DicaModel(admin.ModelAdmin):
  list_filter=('title','description','aluno')
  list_display=('title','description','aluno')

@admin.register(Professor)
class ProfessorModel(admin.ModelAdmin):
  list_filter=('nome','email')
  list_display=('nome','email')

@admin.register(Aluno)
class AlunoModel(admin.ModelAdmin):
  list_filter=('nome','email')
  list_display=('nome','email')
