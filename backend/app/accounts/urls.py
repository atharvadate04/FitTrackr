from django.urls import path
from .views import signup

urlpatterns=[
    path('api/signup/', signup, name='signup'),
]