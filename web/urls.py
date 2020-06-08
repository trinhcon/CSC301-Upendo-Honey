from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('batches/<int:batch_id>', views.batch_detail, name='batch_detail'),
]
