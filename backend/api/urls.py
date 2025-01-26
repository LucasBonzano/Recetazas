from django.urls import path
from . import views

urlpatterns = [
    path('example/', views.example_view, name='example'),
    path('login/', views.login, name="Login"),
    path('register/', views.register, name="Register")
]
