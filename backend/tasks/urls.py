from rest_framework import routers

from tasks.views import TaskViewSet, ProjectViewSet, ScopeViewSet


router = routers.SimpleRouter()
router.register(r'tasks/tasks', TaskViewSet, 'tasks')
router.register(r'tasks/projects', ProjectViewSet, 'projects')
router.register(r'tasks/scopes', ScopeViewSet, 'scopes')

urlpatterns = router.urls
