from django.urls import path,include
from .views import DicaViewSet, UserViewSet,AlunoViewSet

from rest_framework.routers import DefaultRouter


router=DefaultRouter()
router.register('dicas',DicaViewSet,basename='dicas')
router.register('aluno',AlunoViewSet)
router.register('users',UserViewSet)


urlpatterns=[
  path('api/',include(router.urls))

  # path('articles/',ArticleList.as_view()),
  # path('articles/<int:id>/',ArticleDetails.as_view())


# path('articles/',article_list),
# path('articles/<int:pk>/',article_details)
]