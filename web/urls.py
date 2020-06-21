from django.urls import include, path
from rest_framework import routers
from web import views


router = routers.DefaultRouter()
router.register(r'batches', views.BatchViewSet)
router.register(r'batch-members', views.BatchMemberViewSet)
router.register(r'beekeepers', views.BeekeeperViewSet)
router.register(r'forests', views.ForestViewSet)
router.register(r'honey', views.HoneyViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('api/v1/', include(router.urls)),
]
