from django.urls import path
from . import login_user

urlpatterns=[
    path('login/', login_user, name='login_user')
]