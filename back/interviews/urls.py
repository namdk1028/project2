from django.urls import path
from . import views

app_name = 'interviews'


urlpatterns = [
    path('questions/', views.questions_list, name="questions_list"),
    path('questions/create', views.questions_create, name="questions_create"),
]
