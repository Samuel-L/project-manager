from rest_framework import routers

from tasks.views import TaskViewSet


router = routers.SimpleRouter()
router.register(r'tasks/tasks', TaskViewSet, 'tasks')

urlpatterns = router.urls
