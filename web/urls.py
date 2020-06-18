from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/v1/batches/<int:batch_id>', views.batch_detail, name='batch_detail'),
    path('api/v1/batch-member/<int:alphanum_code>', views.get_batch_member, name='get_batch_member'),
    path('api/v1/beekeeper/<int:beekeeper_id>', views.get_beekeeper, name='get_beekeeper'),
]
