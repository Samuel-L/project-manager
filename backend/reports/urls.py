from rest_framework import routers

from reports.views import ReportViewSet


router = routers.SimpleRouter()
router.register(r'reports', ReportViewSet, 'reports')

urlpatterns = router.urls
